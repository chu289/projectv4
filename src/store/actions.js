import axios from 'axios'
// import t from '@/assets/t.json'

export const searchType = async ({ commit }, data) => {
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/'
    const result = await axios.get(baseURL + data)
    commit('SEARCH__RESULT', result.data)
}

export const messagesInit = async ({commit}) => {
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/allReviews'
    const result = await axios.get(baseURL)
    commit('MESSAGES__INIT', result.data)
}

export const messageSend = async ({commit}, data) => {
    console.log(data);
    const baseURL = 'https://miianodeprogram.azurewebsites.net:443/createReview'
    const result = await axios.post(baseURL, {content: data})
    commit('MESSAGE__RELOAD', result.data)
}

export const passLocation = async ({ commit }) => {
    try{
    const result = await getLocation();
    console.log(result);
    commit('Location__RESULT', result)
    }catch(error){//Promise是error時
    console.log("你要開啟定位喔")
    }
  }
  
const getLocation = function(){
    return new Promise(function(resolve, reject) {
      if (navigator.geolocation){
        let options = {enableHighAccuracy : true, maximumAge : 10000, timeout :10000};
        navigator.geolocation.getCurrentPosition(
          (pos)=>{
            let mylocation =[pos.coords.longitude,pos.coords.latitude];
            console.log(`印出經緯度：${pos.coords.longitude},${pos.coords.latitude}`);
            resolve(mylocation);
          },
          (err)=>{console.log(err);reject(err)},
          options);
      }else{
        console.log('目前不支援定位功能');
      }
    });
}