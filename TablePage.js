import Table from "../components/Table";

function TablePage()
{
    const data=[
        {name:'Orange',color:'bg-orange-500',score:5 , quantity:10},
        {name:'Apple',color:'bg-red-500',score:3 , quantity:20},
        {name:'Banana',color:'bg-yellow-500',score:1, quantity:30},
        {name:'Lime',color:'bg-green-500',score:2, quantity:50}
    ]

    const config=[
        {
            label:'Fruit',
            render:(fruit)=>fruit.name,
        
        },

        {
            label:'Color',
            render:(fruit)=>
            <div className={`p-3 m-2 ${fruit.color}`}></div>
        },

        {
            label:'Score',
            render:(fruit)=>fruit.score,
        },

        {

            label:' Quantity',
            render:(fruit)=>fruit.quantity,
        }
    ]

    const keyFn=(fruit)=>{
        return fruit.name 
    }
    return <div> 

        <Table data={data} config={config} keyFn={keyFn}/>

    </div>

}
export default TablePage;