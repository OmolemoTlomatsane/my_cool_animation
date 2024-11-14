particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,   // Number of particles
            density: {
                enable: true,
                value_area: 800  // Area where particles can spawn
            }
        },
        color: {
            value: "#3498db"  // Particle color
        },
        shape: {
            type: "circle",  // Shape of particles
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,   // Opacity of particles
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 3,   // Size of the particles
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1
            }
        },
        line_linked: {
            enable: true,
            distance: 150,  // Distance for the lines to appear
            color: "#3498db",  // Line color
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,  // Movement speed
            direction: "none",  // No specific direction
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",   // Detect interactions on canvas
        events: {
            onhover: {
                enable: true,
                mode: "repulse"  // Interaction mode on hover
            },
            onclick: {
                enable: true,
                mode: "push"  // Add more particles on click
            }
        }
    },
    retina_detect: true  // Enable retina resolution
});