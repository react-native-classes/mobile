import { transform } from '@babel/core'
import React, { ElementRef, useRef, useState } from 'react'
import { Text, View, Animated, Easing, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { caretModel } from '../models/animationModel'
import animationStyle from '../styles/animationStyle'

export const AnimationViewComponent = () => {
    const opacity = useRef(new Animated.Value(1)).current;
    const [opcityState, setopcityState] = useState(false);
    const opacityIn = Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
    })
    const opacityOut = Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
    })
    const showViewOpacity = () => {
        opacityIn.start(() => {
            opacityOut.start();
        });
    }

    const rotate = useRef(new Animated.Value(0)).current;
    const rotateIterpolate = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });
    const rotate180deg = Animated.timing(rotate, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
    });
    const rotate0deg = Animated.timing(rotate, {
        toValue: 0,
        useNativeDriver: false,
        duration: 1000
    });
    const [rotateState, setrotateState] = useState(false);
    const rotateView = () => {
        if (!rotateState) {
            setrotateState(true);
            rotate180deg.start();
        } else {
            setrotateState(false);
            rotate0deg.start();
        }
    }

    const height = useRef(new Animated.Value(0)).current;
    const [changeDimessions, setchangeDimessions] = useState(false);
    const heightInterpolate = height.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.3]
    });
    const expandingViewAnimation = Animated.timing(height, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false
    });
    const collapsingViewAnimation = Animated.timing(height, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
    });
    const expandingView = () => {
        if (!changeDimessions) {
            setchangeDimessions(true);
            expandingViewAnimation.start();
        } else {
            collapsingViewAnimation.start();
            setchangeDimessions(false);
        }
    };
    const getDimenssion = (dimensions: any) => {
        console.log(dimensions.nativeEvent.layout)
    }
    const showView = () => {

    }
    return (
        <ScrollView>
            <View style={animationStyle.content}>
                <Text style={animationStyle.h1}>Animation</Text>
                <View style={animationStyle.contentCard}>
                    <Text style={animationStyle.descriptionText}>Opacity Animation</Text>
                    <Animated.View style={[{ ...animationStyle.contentImage }, { opacity: opacity }]}>
                        <TouchableOpacity onPress={showViewOpacity} activeOpacity={1}>
                            <Image
                                style={animationStyle.imageCard2}
                                source={require('../assets/landscape_1.jpg')} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <View style={animationStyle.contentCard}>
                    <Text style={animationStyle.descriptionText}>Rotate Animation</Text>
                    <Animated.View style={[{ ...animationStyle.contentImage }, { transform: [{ rotate: rotateIterpolate }] }]}>
                        <TouchableOpacity onPress={rotateView} activeOpacity={1}>
                            <Image
                                style={animationStyle.imageCard}
                                source={require('../assets/landscape_1.jpg')} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <View style={animationStyle.contentCard}>
                    <Text style={animationStyle.descriptionText}>Expanding Animation</Text>
                    <Animated.View style={[{ ...animationStyle.contentImage },{ transform: [{ scaleX: heightInterpolate }, { scaleY: heightInterpolate }] }]}>
                        <TouchableOpacity onPress={expandingView} activeOpacity={1}>
                            
                                <Image
                                    style={animationStyle.imageCard}
                                    source={require('../assets/landscape_1.jpg')} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <View style={animationStyle.contentCard}>
                    <Text style={animationStyle.descriptionText}>Collapsing Animation</Text>
                    <Animated.View style={[{ ...animationStyle.contentImage }, { opacity: opacity }]}>
                        <TouchableOpacity onPress={showView} activeOpacity={1}>
                            
                                <Image
                                    style={animationStyle.imageCard}
                                    source={require('../assets/landscape_1.jpg')} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </ScrollView>

    )
}
