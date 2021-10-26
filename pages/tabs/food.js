import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { useState } from 'react'
import Recipe from '../../components/recipe'

export default function Food() {

    const [ recipes, setRecipes ] = useState([
            ['Make a Grilled Chicken Sandwich for Lunch', 'h59xGkKmhPY'],
            ['Roast Chicken Dinner — Gravy, Mashed Potatoes, Peas', 'G8Q3BSF9-1U'],
            ['Quick and Easy Pasta With Cherry Tomato Sauce', '7zS5Wj7ZfIY'],
            ['Chana Masala Recipe • Chickpea Curry Recipe • Chole Bhature Recipe • How To Make Chickpeas Recipe', 'Y_BzN89IcKo'],
            ['Craving Sundubu? Make a Paste | 5-min Sundubu Jjigae!', 'DN3aj6DyCv0'],
            ['Greek Lemon Chicken & Potatoes Recipe - How to Make Greek Lemon, Garlic & Herb Chicken and Potatoes', 'h6OSMbfhIao'],
            ['Watermelon Agua Fresca - Refreshing Summer Watermelon Drink', 'KiCh8dVsbQU'],
            ['How To: Make Chicken and Sausage Gumbo with Isaac Toups', '76JXtB7JFQY'],
            ['How to make an Easy Shoyu Ramen at home in 10 minutes (recipe)', 'AbJNVnkndS4'],
            ['Ramen Lords Chashu', 'XWanWdZ7Lu0'],
            ['Pancakes', 'GLdl71cZXmY'],
            ['Kimchi Fried Rice', 'Lf44Fk7H24s'],
            ['Braised Short Ribs | Basics with Babish', 'DUTyGfwdBaY'],
            ['My favorite chicken and rice dish: Biryani', 'on4IhB8VItY'],
            ['State Fair Lemonade', '_YYF9vBLzGU'],
            ['Extra Crispy Baked Wings', 'mh2AXh1eRmE'],
            ['Tuna, Egg, and Chicken Salad', 'wSn8Yzz_QbA'],
            ['Home fries with peppers', 'H-39Vuw5Jtg'],
            ['Beans and Rice', 'UOtE_mrV3SY'],
            ['Suburban Mom Enchiladas', 'KdbWEjWnXPA'],
            ['Meg\'s Dinner (Binging with Babish)', '6NOtF4l9i9g'],
            ['Tender Chicken Congee', 't2SahnNVULA'],
            ['Super Stretchy Hand Pulled Noodles', '0VveQe8zbuU'],
            ['Chilled Sesame Noodles', 'wBeuHw9kQmo']
        ]);

    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Food</title>
                </Head>

                <main>
                    <h1 className={styles.title}>Food</h1>
                    
                    <div className={utilStyles.recipe_container}>
                        {recipes.map((recipe) => <Recipe key={recipe[1]} title={recipe[0]} video_id={recipe[1]}/>)}
                    </div>
                    
                </main>

            </div>
            
        </Layout>
    )
}