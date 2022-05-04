import { Tween, Reveal } from 'react-gsap';

//For Image fade from left and right
export const RevealImg = ({ children, Variant,  }) => {
    var Var = {
        Variant1: { y: "-40px", x: 0 },
        Variant2: { x: "-40px", y: 0 },
        Variant3: { x: "40px", y: 0 },
        Variant4: { y: "40px", x: 0 },
    }
    return (
        <Reveal repeat threshold={1} >
            <Tween
                from={{ autoAlpha: 0, ...(Var[Variant]), delay: .2, }}
                to={{ autoAlpha: 1, y: 0, x: 0, }}
                ease="back.out(1)">
                {children}
            </Tween>
        </Reveal >
    )
};



//For Content Fade of title,desc,link with delay

export const RevealContent = ({ children, Variant, }) => {
    var Var = {
        Variant1: { delay: 0.3, y: "-10px" },
        Variant2: { delay: 0.6, y: "60px" },
        Variant3: { delay: 1, y: "50px" },
    }
    return (
        <Reveal repeat threshold={1} >
            <Tween
                from={{ autoAlpha: 0, ...(Var[Variant]), }}
                to={{ autoAlpha: 1, y: 0, x: 0 }}
                ease="back.out(1)">
                {children}
            </Tween>
        </Reveal>
    )
}




