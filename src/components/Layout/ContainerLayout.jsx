import React from "react";


function ContainerLayout({children , className=''}) {
	return (
		<>
			<div className={` h-auto relative   w-full sm:px-5  md:px-10 lg:px-15 my-2 ${className}`}>
			{children}
			</div>
		</>
	);
}

export default ContainerLayout;
