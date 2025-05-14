import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const Langs = ["JavaScript", "HTML5", "CSS3", "PHP", "Typescript", "SQL", "Markdown", "JSON",]
    const Techs = ["Windows", "Linux", "React", "Expo", "Express", "MongoDB", "Bootstrap", "Tailwind"]
    const Tools = ["VSCode", "Vim", "Emmet", "Powershell", "Bash", "TMUX", "Phaser", "Git", "GitHub", "Virtual Box", "Node"]
    const Cools = ["Adaptability", "Creativity", "Perseverance", "Data Analysis"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">About Me</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">

                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate transition-all">
                            <h3 className="text-xl font-bold mb-4">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {Langs.map((tech, key) => (
                                    <span key={key} className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate transition-all">
                            <h3 className="text-xl font-bold mb-4">Techs</h3>
                            <div className="flex flex-wrap gap-2">
                                {Techs.map((tech, key) => (
                                    <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate transition-all">
                            <h3 className="text-xl font-bold mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {Tools.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate transition-all">
                            <h3 className="text-xl font-bold mb-4">Cools</h3>
                            <div className="flex flex-wrap gap-2">
                                {Cools.map((tech, key) => (
                                    <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-dics list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S. in Computer Science</strong> - XYZ University
                            </li>
                            <li>
                                Relevant Coursework: 
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Position</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi odio enim dolores nostrum error maxime sequi vero repellendus recusandae, expedita nemo dolorem, totam tempore excepturi! Harum blanditiis quibusdam eveniet reiciendis.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Position</h4>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi odio enim dolores nostrum error maxime sequi vero repellendus recusandae, expedita nemo dolorem, totam tempore excepturi! Harum blanditiis quibusdam eveniet reiciendis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}