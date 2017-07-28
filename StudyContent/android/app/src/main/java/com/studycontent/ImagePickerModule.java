package com.studycontent;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by Ape on 2017/7/5.
 */

/*
    参照  https://reactnative.cn/docs/0.46/native-modules-android.html#content

* 返回一个模块，这个模块用于操作后，将数据返回给js层
*
* 放回数据有2种方法 一种为回调 ，一种为  Promise, 此处用的时 Promise
* 具体做法和 返回控件差不多，
*
* 差别是在第4步， 此处 在 createNativeModules方法  返回实例
*
* */

public class ImagePickerModule extends ReactContextBaseJavaModule {

    private static final int IMAGE_PICKER_REQUEST = 467081;
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";
    private Promise mPickerPromise;


    private ActivityEventListener mActivityEventListener = new BaseActivityEventListener(){

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            super.onActivityResult(activity, requestCode, resultCode, data);
            if (requestCode == IMAGE_PICKER_REQUEST) {
                if(mPickerPromise !=null){
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mPickerPromise.reject(E_PICKER_CANCELLED, "取消操作");
                    }else if (resultCode == Activity.RESULT_OK) {
                        Uri uri = data.getData();
                        if(uri == null){
                            mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "没有图片数据");
                        }else{
                            Log.i("AAAA",uri.toString());
                            mPickerPromise.resolve(uri.toString());
                        }
                    }
                }
            }
        }
    };

    public ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return "ImagePickerModule";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @ReactMethod
    public void  pickImage(final Promise promise){
        Activity currentActivity = getCurrentActivity();
        if(currentActivity == null){
            promise.reject( E_ACTIVITY_DOES_NOT_EXIST,"Activity does not exist");
            return;
        }

        mPickerPromise = promise;
        try{
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);
            galleryIntent.setType("image/*");
            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);

        }catch ( Exception e){
            mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPickerPromise = null;
        }
    }

}
