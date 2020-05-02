import React from 'react';
import "./style.css";
import Particles from 'react-particles-js';



class ParticlesJS extends React.Component{

    render(){
        return(
            <div>
                <Particles className="particle" width="100vw" height ="100vh"
                    params={{
                        particles: {
                                number: {
                                value: 0,
                                density: {
                                    enable: true,
                                    value_area: 8000000
                                }
                                },
                                color: {
                                value: "#ffffff"
                                },
                                shape: {
                                type: "image",
                                stroke: {
                                    width: 0,
                                    color: "#000000"
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                                image: {
                                    src: "https://i.ibb.co/xH2GWQC/output-onlinepngtools.png",
                                    width: 100,
                                    height: 100
                                }
                                },
                                opacity: {
                                value: 0.9,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                                },
                                size: {
                                value: 70,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 80,
                                    size_min: 0.1,
                                    sync: false
                                }
                                },
                                line_linked: {
                                enable: false,
                                distance: 300,
                                color: "#ffffff",
                                opacity: 0.4,
                                width: 2
                                },
                                move: {
                                enable: true,
                                speed: 5,
                                direction: "none",
                                random: false,
                                straight: false,
                                out_mode: "out",
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                                }
                            },
                            interactivity: {
                                detect_on: "window",
                                events: {
                                onhover: {
                                    enable: false,
                                    mode: "repulse"
                                },
                                onclick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: false
                                },
                                modes: {
                                grab: {
                                    distance: 800,
                                    line_linked: {
                                    opacity: 1
                                    }
                                },
                                bubble: {
                                    distance: 800,
                                    size: 5,
                                    duration: 2,
                                    opacity: 0.8,
                                    speed: 3
                                },
                                repulse: {
                                    distance: 400,
                                    duration: 0.4
                                },
                                push: {
                                    particles_nb: 4
                                },
                                remove: {
                                    particles_nb: 2
                                }
                                }
                            },
                            retina_detect: true
                            }

                    }
                />
                
            </div>
        )
    }
}

export default ParticlesJS;