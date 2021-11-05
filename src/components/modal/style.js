import { makeStyles } from "@mui/styles";


export default makeStyles({
    input: {
        backgroundColor: '#FDFAFA',
        borderColor: '#E8E8E8'
    },
    card: {
        width: "25%",
        display: 'flex',
        flexDirection: 'column'
    },
    img: {
        maxWidth: '20px',
        alignSelf: 'flex-end',
        marginTop: '20px',
        marginRight: '30px'
    },
    cardBackdrop: {
        background: 'rgba(16, 15, 15, 0.56)',
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})