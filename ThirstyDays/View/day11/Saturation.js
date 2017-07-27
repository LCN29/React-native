/**
 * Created by Ape on 2017/7/21.
 */

import React from 'react';

import  GL from 'gl-react';


const shaders = GL.Shaders.create({

    saturation: {
        frag: `
            precision highp float;
            varying vec2 uv;
            uniform sampler2D image;
            uniform float factor;
            void main () {
                vec4 c = texture2D(image, uv);
                const vec3 W = vec3(0.2125, 0.7154, 0.0721);
                gl_FragColor = vec4(mix(vec3(dot(c.rgb, W)), c.rgb, factor), c.a);
            }
        `
    },
});

const Saturation = GL.createComponent(
    ({ factor, image, ...rest }) =>
        <GL.Node
            {...rest}
            shader={shaders.saturation}
            uniforms={{ factor, image }}
        />,
    { displayName: "Saturation" }
);

module.exports = Saturation;
