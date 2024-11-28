
// List (map)

// export const Fruit = () => {
//     const fruits = ["apple", "banana","pear", "peach"]
//     return(
//         <main>
//         {fruits.map((friut) => (
//              <ul>
//                  <li>{fruit}</li>
//              </ul>
//           )
//           )}
//         </main>
//  )}



// export const Cars = () =>{
//     const car = ['BMW','Mers','Toyota','CHevrolet']
//     return(
//         <main>
//             {car.map((moshin)=>(
//                 <ol>
//                   <li>{moshin}</li>
//                 </ol>
//             )
//             )}
//         </main>
//     )
// }




// export const School = () =>{
//     const subject = ['math','english','russian']
//     return(
//         <main>
//             {subject.map((fanlar) =>(
//                 <ul>
//                     <li>{fanlar}</li>
//                 </ul>
//             ))}
//         </main>
//     )
// }




// export const Room = () =>{
//     const things = [{
//         size :'big',
//         condition :'great'
//
//     }]
//     return(
//         <main>
//             {things.map((xona) => (
//                 <ul>
//                     <li>{xona}</li>
//                 </ul>
//             ))}
//         </main>
//     )
// }




// export const Cook = () =>{
//     const Plita = [{
//         year:2020,
//         condition:'well',
//         looks:'beautiful'
//     }]
//     return(
//         <main>
//             {Plita.map((cook)=>(
//                 <ol>
//                     <li>{cook}</li>
//                 </ol>
//             ))}
//         </main>
//     )
// }


















// Props
//
// export const Administrator = () => {
//     return(
//     <Admin name="Umar" age={15} sport={["taekwondo"]}/>
//     )
// }
//
// const Admin = ({name,age,sport}) => {
//     return(
//         <section>
//         <h3>{name}</h3>
//         <h3>{age}</h3>
//         <h3>{sport}</h3>
//         </section>
//     )
// }

//
// export const App = () =>{
//     return(
//         <Car name='BMW'  year={2015}/>
//     )
// }
//
// const Car = ({name,year}) =>{
//     return(
//         <section>
//             <h4>{name}</h4>
//             <h4>{year}</h4>
//         </section>
//     )
// }


//
// export const App = () =>{
//     return(
//         <Home  size='big'  floors={5}/>
//     )
// }
//
// const Home = ({size,floors})=>{
//     return(
//         <section>
//             <h2>{size}</h2>
//             <h2>{floors}</h2>
//         </section>
//     )
// }

//
// export const App = () =>{
//     return(
//         <School  subjects={15} rooms={417} students={2253}/>
//     )
// }
//
// const School = ({subjects,rooms,students})=>{
//     return(
//         <section>
//             <h3>{subjects}</h3>
//             <h3>{rooms}</h3>
//             <h3>{students}</h3>
//         </section>
//     )
// }




// export const App = () =>{
//     return(
//         <Book  name="Harry Poter"  year={2005}   condition='great book'/>
//     )
// }
//
// const Book = ({name,year,condition})=>{
//     return(
//         <section>
//             <h2>{name}</h2>
//             <h2>{year}</h2>
//             <h2>{condition}</h2>
//         </section>
//     )
// }