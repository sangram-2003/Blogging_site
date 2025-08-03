import React from 'react'

function LearnMoreBtn({
    title,
    className='',
    ...props
}) {
    return (
        <>
        <div class={`px-4 pb-4 pt-0 mt-2 `} {...props}>
								<div>
										<a
											href="#"
											className={`text-slate-800 font-semibold text-sm hover:underline flex items-center ${className}`}
										>
											{title}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="ml-2 h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</a>
									</div>
							</div>
        </>
    )
}

export default LearnMoreBtn
