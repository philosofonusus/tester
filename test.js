function test(props){
    try{
        props()
    } catch(e){
        return window.location.href = 'http://stackoverflow.com/search?q=[javascript]+' + e.message
    }
}
export default test;
