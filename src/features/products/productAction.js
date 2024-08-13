

export const fetchProductAction = ()=async(dispatch)=>{
const {status,products}= await fetchProductAction()

if (status === "success"){
  dispatch()
}
}