/**
 * Created by Ape on 2017/7/21.
 */

import React from 'react';


/*
*   使用前需要安装2个包
*   1, npm install gl-react --save           安装gl-react
*   2，npm install gl-react-native --save    安装gl-react-native
*
*   3，npm install gl-react-image --save      安装gl-react-image
*   （注：这个包程序中没用到，作用 用来替代原生的Image, GLImage是一个高性能的组件，能是一个高性能的组件）
*
*   4，npm install gl-react-instagramfilters --save   安装gl-react-instagramfilters
*   （注，这个包程序也没用到，gl的使用需要封装滤镜，自己不想分装的话，可以导入这个包，里面有19个封装好的滤镜）
*
*   安卓配置：
*   1,在android/settings.gradle 里面添加
*       include ':RNGL'
        project(':RNGL').projectDir = file('../node_modules/gl-react-native/android')

    2，在android/app/build.gradle: 里面添加
        compile project(':RNGL')

    3，在你的  MainApplication.java 文件的 protected List<ReactPackage> getPackages() {}
    方法里面 加入 new RNGLPackage();  确保引用了 import com.projectseptember.RNGL.RNGLPackage;

    配置完后，运行reactnative 项目时，会报错（我的情况就是这样）,关掉程序，在重启，还报错的话，在重复几次，就好了
*
* */

/*
*   gl 官方 API hhttps://projectseptemberinc.gitbooks.io/gl-react/content/index.html
* */


import  GL from 'gl-react';

/*
*   // 精度  变量修饰符 浮点型
*
*   // 这个变量在所有像素位置都有变化(从vec2(0.0,0.0)到vec2(1.0,1.0))
*
*   // 每个像素都会调用这个函数
*
*    // x : 红色,   y : green,   value : blue,    1.0 : alpha 透明度
* */

const shaders = GL.Shaders.create({

    helloGL: {
        frag: `
            precision highp float;
            varying vec2 uv;
            uniform float value;
            void main () {
                gl_FragColor = vec4(uv.x, uv.y, value, 1.0);
            }
        `
    },
});

const HelloGL = GL.createComponent(
    ({value})=> { return <GL.Node shader={shaders.helloGL} uniforms={{ value }}/>},
    {displayName: "HelloGL"}
);

module.exports = HelloGL;
