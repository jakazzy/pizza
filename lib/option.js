module.exports = (args)=>{
    const { p, c, C} =args
    if(C){
        console.log(`You ordered a pizza with:"\n- peppers`);
    }
    if (c){
        console.log(`You ordered a pizza with:"\n- peppers\n- ${c} cheese`
        );
    }
}