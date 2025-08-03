import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Checkbox, CommanBtn, Input, RTE, Select, Upload } from ".."; // .. => ./index.js
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PostForm({ post }) {
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm(
			// this control pass to RTE
			{
				defaultValues: {
					title: post?.title || "",
					slug: post?.$id || "",
					content: post?.content || "",
					status: post?.status || true,
					trending:post?.trending || false ,
					// default is active
				},
			}
		);

	const navigate = useNavigate();
	const userData = useSelector((state) => state.auth.userData);

	const submit = async (data) => {
		console.log("fom data " , data)
		  data.status = data.status ? "true" : "false";
  data.trending = data.trending ? "true" : "false";
		if (post) {
			// if post availasble then update
			const file = data.image[0]
				? await service.uploadFile(data.image[0])
				: null;

			if (file) {
				service.deleteFile(post.featuredImage); // featuredimage is the id
			}

			const dbpost = service.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});

			if (dbpost) {
				navigate(`/dashboard/all-posts`);
			}
		} else {
			const file = await service.uploadFile(data.image[0]);

			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;
				const dbPost = await service.createPost({
					...data,
					userID: userData.userData.$id,
				});
				if (dbPost) {
					navigate(`/dashboard/all-posts`);
				}
			}
		}
	};

	const slugTransform = useCallback((value) => {
		if (value && typeof value === "string")
			return value
				.trim()
				.toLowerCase()
				.replace(/[^a-zA-Z\d\s]+/g, "-")
				.replace(/\s/g, "-");

		return "";
	}, []);

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "title") {
				setValue("slug", slugTransform(value.title), { shouldValidate: true });
			}
		});

		return () => subscription.unsubscribe(); // memory management
	}, [watch, slugTransform, setValue]);
	return (
		<>

			<div className="w-full justify-center flex items-center h-auto  ">

				<form onSubmit={handleSubmit(submit)} className="flex-col space-y-4 flex-wrap w-5/6 px-10 py-10 rounded-xl bg-black/20  justify-center items-center ">
				<div className="w-full ">
                    <h1 className="text-center text-4xl font-bold pb-5 w-full border-b-2 inline-block ">Create a new post </h1>
				</div>

				<div className="w-full px-2 flex-col">
					<Input
						label="Title :"
						placeholder="Title"
						className="mb-4"
						{...register("title", { required: true })}
					/>
					<Input
						label="Slug :"
						placeholder="Slug"
						className="mb-4"
						{...register("slug", { required: true })}
						onInput={(e) => {
							setValue("slug", slugTransform(e.currentTarget.value), {
								shouldValidate: true,
							});
						}}
					/>
					<RTE
						label="Content :"
						name="content"
						control={control}
						defaultValue={getValues("content")}
					/>
				</div>
				<div className="w-full px-2 flex-col justify-center items-center">
					<Input
						label="Featured Image :"
						type="file"
						className="mb-4"
						accept="image/png, image/jpg, image/jpeg, image/gif"
						{...register("image", { required: !post })}
					/>
					{post && (
						<div className="w-full mb-4">
							<img
								src={service.getFilePreview(post.featuredImage)}
								alt={post.title}
								className="rounded-lg"
							/>
						</div>
					)}
					 <Select
						options={["Travel", "Advanture","Culture"]}
						label="Category"
						className="mb-4"
						{...register("category", { required: true })}
					/>
					  <div className="flex items-center justify-between">
            <Checkbox
              label="Status"
              name="status"
              value={watch("status")}
              onChange={(e) => setValue("status", e.target.checked)}
              className="mb-4"
            />
            <Checkbox
              label="Trending"
              name="trending"
              value={watch("trending")}
              onChange={(e) => setValue("trending", e.target.checked)}
              className="mb-4"
            />
          </div>
					
					
                   
					<div className="w-full overflow-hidden text-center">
                      <CommanBtn type="submit" title="Submit" className="w-full sm:w-4/6 md:w-3/6 mt-5" />
					</div>
					
				</div>
			</form>
			</div>
		</>
	);
}

export default PostForm;
