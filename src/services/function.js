import * as Exponent from 'exponent';

async function logIn() {
  console.log('in login function');
  const { type, token } = await Exponent.Facebook.logInWithReadPermissionsAsync(
    '1580645588617791', {
      permissions: ['public_profile'],
    });
  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).name}!`,
    );
  }
}

 async function snapShot(){
  Exponent.takeSnapshotAsync(2, {
    format: 'jpeg',
    quality: 1,
    result: 'file',
    height: height,
    width: width,
  }).then((result) => console.log('response', result))

}

function  getLocation() {
   Exponent.Location.getCurrentPositionAsync({enableHighAccuracy: true}).then((result) => console.log('response', result))
 }

 export default logIn ;