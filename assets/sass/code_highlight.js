import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "prehighlight": {
        "backgroundColor": "#272822"
    },
    "highlight pre": {
        "backgroundColor": "#272822"
    },
    "highlight hll": {
        "backgroundColor": "#22282A"
    },
    "highlight c": {
        "color": "#99AA8A"
    },
    "highlight err": {
        "color": "#960050",
        "backgroundColor": "#1e0010"
    },
    "highlight k": {
        "color": "#93C763"
    },
    "highlight l": {
        "color": "#ae81ff"
    },
    "highlight n": {
        "color": "#F1F2F3"
    },
    "highlight o": {
        "color": "#E8E2B7"
    },
    "highlight p": {
        "color": "#F1F2F3"
    },
    "highlight ch": {
        "color": "#99AA8A"
    },
    "highlight cm": {
        "color": "#99AA8A"
    },
    "highlight cp": {
        "color": "#99AA8A"
    },
    "highlight cpf": {
        "color": "#99AA8A"
    },
    "highlight c1": {
        "color": "#99AA8A"
    },
    "highlight cs": {
        "color": "#99AA8A"
    },
    "highlight gd": {
        "color": "#E8E2B7"
    },
    "highlight ge": {
        "fontStyle": "italic"
    },
    "highlight gi": {
        "color": "#678CB1"
    },
    "highlight gs": {
        "fontWeight": "bold"
    },
    "highlight gu": {
        "color": "#99AA8A"
    },
    "highlight kc": {
        "color": "#93C763"
    },
    "highlight kd": {
        "color": "#93C763"
    },
    "highlight kn": {
        "color": "#E8E2B7"
    },
    "highlight kp": {
        "color": "#93C763"
    },
    "highlight kr": {
        "color": "#93C763"
    },
    "highlight kt": {
        "color": "#83D8E1"
    },
    "highlight ld": {
        "color": "#EC7600"
    },
    "highlight m": {
        "color": "#FFCD22"
    },
    "highlight s": {
        "color": "#EC7600"
    },
    "highlight na": {
        "color": "#678CB1"
    },
    "highlight nb": {
        "color": "#F1F2F3"
    },
    "highlight nc": {
        "color": "#678CB1"
    },
    "highlight no": {
        "color": "#93C763"
    },
    "highlight nd": {
        "color": "#678CB1"
    },
    "highlight ni": {
        "color": "#F1F2F3"
    },
    "highlight ne": {
        "color": "#678CB1"
    },
    "highlight nf": {
        "color": "#678CB1"
    },
    "highlight nl": {
        "color": "#F1F2F3"
    },
    "highlight nn": {
        "color": "#F1F2F3"
    },
    "highlight nx": {
        "color": "#678CB1"
    },
    "highlight py": {
        "color": "#F1F2F3"
    },
    "highlight nt": {
        "color": "#E8E2B7"
    },
    "highlight nv": {
        "color": "#F1F2F3"
    },
    "highlight ow": {
        "color": "#E8E2B7"
    },
    "highlight w": {
        "color": "#F1F2F3"
    },
    "highlight mb": {
        "color": "#FFCD22"
    },
    "highlight mf": {
        "color": "#FFCD22"
    },
    "highlight mh": {
        "color": "#FFCD22"
    },
    "highlight mi": {
        "color": "#FFCD22"
    },
    "highlight mo": {
        "color": "#FFCD22"
    },
    "highlight sb": {
        "color": "#EC7600"
    },
    "highlight sc": {
        "color": "#EC7600"
    },
    "highlight sd": {
        "color": "#EC7600"
    },
    "highlight s2": {
        "color": "#EC7600"
    },
    "highlight se": {
        "color": "#ae81ff"
    },
    "highlight sh": {
        "color": "#EC7600"
    },
    "highlight si": {
        "color": "#EC7600"
    },
    "highlight sx": {
        "color": "#EC7600"
    },
    "highlight sr": {
        "color": "#EC7600"
    },
    "highlight s1": {
        "color": "#EC7600"
    },
    "highlight ss": {
        "color": "#EC7600"
    },
    "highlight bp": {
        "color": "#F1F2F3"
    },
    "highlight vc": {
        "color": "#F1F2F3"
    },
    "highlight vg": {
        "color": "#F1F2F3"
    },
    "highlight vi": {
        "color": "#F1F2F3"
    },
    "highlight il": {
        "color": "#FFCD22"
    }
});