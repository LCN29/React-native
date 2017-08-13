/**
 * Created by LCN on 2017/8/10 0010.
 */

import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    WebView,
    InteractionManager
} from 'react-native';

export default class WebPage extends Component{

    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: 'white' },
        title: navigation.state.params.title,
    });

    constructor(props: Object) {
        super(props);
        this.state = {
            source: {}
        }
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({ title: '加载中' })
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    onLoadEnd(e){
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({ title: e.nativeEvent.title })
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.webView}
                    automaticallyAdjustContentInsets={false}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});