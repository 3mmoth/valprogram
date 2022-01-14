const particleConfig = {
    fpsLimit: 60,
    fullScreen: false,
    background:{
        color: "#fbd1d6"
    },
    interactivity: {
        events: {
        onClick: {
            enable: false,
        },
        onHover: {
            enable: true,
            mode: "bubble",
        },
        resize: true,
        },
        fullScreen:{
            enable: false,
            zIndex: -1
        }, 
        modes: {
        bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
        },
        push: {
            quantity: 4,
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
        },
    },
    particles: {
        color: "#fbd1d6",
        links: {
        enable: false,
        },
        collisions: {
        enable: true,
        },
        move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: .5,
        straight: false,
        },
        number: {
        density: {
            enable: true,
            value_area: 800,
        },
        value: 20,
        },
        opacity: {
        value: 0.1,
        },
        shape: {
        type: "circle",
        stroke: {
            width: 40,
            color: {value: ["#fb8330",
            "#b40d1e", "#ED1B34"]},
            opacity: 0.1
          },
        },
        size: {
        random: true,
        minimumValue: 50,
        maximumValue: 300,
        value: 100,
        },
    },
    detectRetina: true,
    }

  ;

export default particleConfig;