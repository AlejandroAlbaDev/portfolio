import Header from "./components/Header";
import ExperienceItem from "./components/ExperienceItem";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
    // Data for work experiences
    const experiences = [
        {
            title: "Desarrollador en prácticas",
            company: "UNIVERSIDAD DE GRANADA (UGR)",
            period: "Abril. 2024 - Junio. 2024",
            description: "",
            // "Desarrollo de una aplicación web para la generación de medidas sintéticas de satélites en el marco de un proyecto NEOTEC financiado por el CDTI. Responsable de varias tareas de preparación y procesamiento de datos satelitales críticos para la observación terrestre, implementando soluciones técnicas innovadoras que optimizan la calidad y utilidad de la información geoespacial obtenida.",
            projects: [
                "Página web del grupo de Astrofisica Galáctica",
            ],
            technologies: ["Astro", "Markdown", "GitHub"],
            image: "/company_logo/UGR.png",
        },
        {
            title: "Administrador de tests",
            company: "ISP Gestión",
            period: "Julio. 2024 - Presente",
            description: "",
            // "Desarrollo de una aplicación web para la generación de medidas sintéticas de satélites en el marco de un proyecto NEOTEC financiado por el CDTI. Responsable de varias tareas de preparación y procesamiento de datos satelitales críticos para la observación terrestre, implementando soluciones técnicas innovadoras que optimizan la calidad y utilidad de la información geoespacial obtenida.",
            projects: [
                "TPV",
                "Configuraciones y mejoras de la aplicación"
            ],
            technologies: ["PHP", "JavaScript", "Postgre", "Yii", "Syncfusion"],
            image: "/company_logo/ispgestion.png",
        },
        // {
        //     title: "Analista en Prácticas",
        //     company: "KPMG",
        //     period: "Mar. 2023 - Ago. 2023",
        //     description:
        //         "Colaboración con el departamento de Estrategia (Technology Enablement) participando en proyectos de desarrollo y transformación digital para clientes corporativos. Esta experiencia me permitió adquirir una visión global del ciclo de vida de proyectos tecnológicos en entornos corporativos, decidiendo posteriormente orientar mi carrera hacia equipos más pequeños, donde pudiera tener mayor impacto directo en el desarrollo.",
        //     technologies: [
        //         "Quality Assurance",
        //         "Documentación Técnica",
        //         "Presentaciones Ejecutivas",
        //         "Consultoría Tecnológica",
        //     ],
        //     image: "/company_logo/kpmg.png",
        // },
        // {
        //     title: "Ingeniero de Investigación en Visión Artificial",
        //     company: "Universidad de Valladolid (UVa)",
        //     period: "Nov. 2021 - Mar. 2023",
        //     description: "",
        //     projects: [
        //         "Sistema de prevencion de roturas en cintas transportadoras",
        //         "Prototipo contador de visitantes para eventos en espacios abiertos",
        //     ],
        //     technologies: [
        //         "Python",
        //         "Computer Vision",
        //         "IoT",
        //         // "Inteligencia Artificial",
        //         // "Ciencia de Datos",
        //         "Machine Learning",
        //     ],
        //     image: "/company_logo/uva.png",
        // },
    ];

    // Sample project data
    const projects = [
        {
            image: "/projects_logo/pixelMetroid.png",
            domain: "https://github.com/AlejandroAlbaCastillo/PixelMetroid2D.git",
        },
        {
            image: "/projects_logo/Sportify.png",
            domain: "https://github.com/AlejandroAlbaCastillo/TFGAlejandroAlbaCastillo/tree/dev",
        },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://travelblog.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://weatherapp.goyocancio.es",
        // },
        // {
        //     image: "/projects_logo/blockheadapp.png",
        //     domain: "https://portfolio.goyocancio.es",
        // },
    ];

    return (
        <div className="flex flex-col max-w-screen-md mx-auto">
            <Header />

            {/* Work Experience Section*/}
            <section id="experience">
                <div className="container mx-auto py-12">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Experiencia Laboral
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <ExperienceItem
                                key={index}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <div className="container mx-auto py-12 px-10">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Proyectos Personales
                        </h2>
                    </div>

                    <p className="text-xs md:text-base mb-2 text-justify">
                    Además de mi trabajo diario, dedico tiempo a desarrollar proyectos personales 
                    que me permiten seguir mejorando como desarrollador. La mayoría están enfocados 
                    en tecnologías como PHP y JavaScript, y me sirven para experimentar con nuevas 
                    herramientas, probar arquitecturas, y mantenerme al día con las buenas prácticas 
                    del desarrollo web.
                    </p>
                    <p className="text-xs md:text-base mb-8  text-justify">
                        Aquí puedes ver algunos de ellos:
                    </p>

                    {/* Projects row */}
                    <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
                        {/* Restore the map */}
                        {projects.map((project, index) => {
                            if (!project || !project.image || !project.domain) {
                                return null; // Keep the check and null return
                            }
                            return (
                                <div key={index} className="">
                                    <ProjectItem project={project} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <footer className="text-center text-xs md:text-sm text-gray-500">
<<<<<<< HEAD
                © {new Date().getFullYear()} Alejandro Alba Castillo. Todos los derechos
=======
                © {new Date().getFullYear()} Alejandro Alba. Todos los derechos
>>>>>>> 765b9132c3ee923718f41869dcfc61e624a47ad5
                reservados.
            </footer>
        </div>
    );
}
