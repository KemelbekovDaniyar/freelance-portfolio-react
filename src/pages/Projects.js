import Project from '../components/Projects/Projects'

import { projects } from '../components/Helpers/ProjectsList'

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>

					{projects.map((project) => {
						return <Project title={project.title} img={project.img} />;
					})}

				</ul>
			</div>
		</main>
	)
}

export default Projects
