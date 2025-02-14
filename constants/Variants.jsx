
export const variants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.3,
            ease: "easeIn",
        },
    },
};

export const childVariants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export const variantTitle = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export const variantVideo = {
    initial: {
        opacity: 0,
        y: 80,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export const variant1 = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.3,
        },
    },
};

export const variant2 = {
    initial: {
        opacity: 0,
        x: 50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.3,
        },
    },
};

export const parentVariant = {
    animate: {
        transition: {
            duration: 0.6,
            staggerChildren: 0.5,
            delayChildren: 0.4,
        },
    },
};
export const variantGrid = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.08 * index,
        },
    }),
};

export const variantGrid2 = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            delay: 0.08 * index,
        },
    }),
};