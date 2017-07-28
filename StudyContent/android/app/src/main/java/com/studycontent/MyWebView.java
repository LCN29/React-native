package com.studycontent;

import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by Ape on 2017/7/28.
 */

/*
* 使用原生模块
* 1 声明一个类， 继承  SimpleViewManager
* 2 实现里面的2个方法
* 3，如果暴露的方法，可以设置属性， 写好对应的方法
* 4 声明一个类 实现 ReactPackage 在 createViewManagers 方法中 返回实例
*  5 在 MainApplication 中 getPackages() new 出 4的类
* */

public class MyWebView extends SimpleViewManager<WebView> {

    private static final String REACT_CLASS = "MyWebView";

    // 返回给ReactNative js层 调用的 名称
    @Override
    public String getName() {

        return REACT_CLASS;
    }

    // 创建原生模块，并返回
    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView view = new WebView(reactContext);
        view.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        return view;
    }

    // 暴露给js层的属性，  参数 : url 属性名（默认的数据类型为String）  参数需要用@ReactProp说明

    @ReactProp(name="url")
    public void setUrl(WebView view,@Nullable String url){
        Log.i("AAAA",url);
        view.loadUrl(url);
    }
}

