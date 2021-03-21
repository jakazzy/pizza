module.exports = (args)=>{
    console.log(args);
    const { p, c, C} =args
    if(C){
        console.log(`You ordered a pizza with:"
        - peppers`);
    }
    if (c){
        console.log(`You ordered a pizza with:"
        - peppers
        - gouda ${c}`
        );
    }
}