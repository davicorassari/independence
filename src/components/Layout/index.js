import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        widith: "100vw"
    }
}))

function Layout ({ children }){
    return (
    <div>
        <div>Top Bar</div>
        <div>Nav Bar</div>
        { children }
    </div>
    )
    
}

export default Layout;