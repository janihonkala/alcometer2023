const { StyleSheet, StatusBar } = require("react-native");

const BasicStyle = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        backgroundColor: '#ffa384',
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'center',
        flexWrap: "wrap"

    },
    header: {
        textAlign: 'center',
        color: '#274472',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 10
    },
    texts: {

        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    textRow: {
        flexDirection: "align",
        margin: 100,
        justifyContent: "center"
    },
    textTulos: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    },

    thumbEnabledColor: '#a52f2fff',
    thumbDisabledColor: '#3da775ff'

});

const FancyStyle = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        backgroundColor: '#efe7bc',
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'center',
        flexWrap: "wrap"

    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: '#74bdcb',
        padding: 10
    },
    texts: {

        fontWeight: 'bold',
        fontSize: 15,
    },
    textRow: {
        flexDirection: "align",
        margin: 100,
        justifyContent: "center"
    },
    textTulos: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    },

    thumbEnabledColor: '#a52f2fff',
    thumbDisabledColor: '#3da775ff'
});

export { BasicStyle, FancyStyle };