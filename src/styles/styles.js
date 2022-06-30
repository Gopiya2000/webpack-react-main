import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
    loginForm : {
      display:"flex" ,
      marginLeft:'auto',
      marginRight:'auto',
      color:'warning'
    },
    submitForm : {
      maxWidth:'400',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      boxShadow:'10px 10px 20px #ccc',
      padding:3,
      margin:'auto',
      marginTop:5,
      borderRadius:5,
      color:'warning'
    }
  }))
// export let loginForm = {
//   display:"flex" ,
//   marginLeft:'auto',
//   marginRight:'auto',
// }
// export let submitForm ={
//       maxWidth:'400',
//       display:'flex',
//       flexDirection:'column',
//       alignItems:'center',
//       justifyContent:'center',
//       boxShadow:'10px 10px 20px #ccc',
//       padding:3,
//       margin:'auto',
//       marginTop:5,
//       borderRadius:5,
// }
export let appBar = {
    backgroundColor : '#2E3B55'
}
export let loginTabs = {
  textColor: 'inherit'
}
export let loginBox = {
  display:"flex",
   marginLeft:'auto',
   color:'warning'
}
export let LoginButton = {
  margin: 1,
  borderRadius: 10 ,
  backgroundColor:'#e95307'
}
export let logoutButton = {
  margin: 1,
  borderRadius: 10,
  backgroundColor:'#e95307' 
}
export let signupButton = {
  margin: 1,
  borderRadius: 10,
  backgroundColor:'#e95307'
}
export let fieldTypography = {
  padding:3,
  textAlign:'center'
}
export let authSubmit = {
  borderRadius: 3,
   marginTop: 3,
   backgroundColor:'#e95307'
}
export let changeButton = {
  borderRadius: 3,
   marginTop: 3
}
export let headerMenu = {
  color : 'white'
}
export let headerButtons = {
 
  borderRadius : '3px'
}
