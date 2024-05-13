import React from 'react';
import { github } from '../assets';

export default function ProjectCard({
	name,
	description,
	tags,
	image,
	url,
	source_code_link,
}) {
  return (
    <div className='sm:mr-10'>
			<div className='bg-black p-5 rounded-md max-w-[360px] w-full select-none border border-slate-700 hover:scale-105 hover:shadow-lg hover:shadow-slate-600 transition-all duration-500'>
				<div className='relative w-full h-[230px]'>
					<a href={url} target='_blank' rel='noreferrer'>
						<img
							src={image}
							alt='project_image'
							className='w-full h-full object-contain sm:object-cover rounded-md cursor-pointer'
						/>
					</a>
					<div className='absolute top-0 right-0 card-img_hover'>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='bg-blue-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>
				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2  min-h-[120px] text-gray-300 text-[14px]'>
						{description}
					</p>
				</div>
				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</div>
  )
}
