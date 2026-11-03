export const Recipes = [
  {
    id: "1",
    title: "Chicken Biryani",
    description: "Delicious Indian rice cooked with chicken and aromatic spices.",
    category: "lunch",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c",
    cookingTime: "45 minutes",
    difficulty: "Medium",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 onions",
      "2 tomatoes",
      "Yogurt",
      "Biryani spices",
      "Salt and oil"
    ],
    instructions: [
      "Wash and soak the rice.",
      "Cook onions, tomatoes and spices.",
      "Add chicken and cook until tender.",
      "Add rice and water.",
      "Cook until the rice is ready and serve."
    ]
  },
  {
    id: "2",
    title: "Beef Burger",
    description: "Juicy homemade beef burger with fresh vegetables.",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    cookingTime: "30 minutes",
    difficulty: "Easy",
    ingredients: [
      "Burger buns",
      "Ground beef",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Sauce"
    ],
    instructions: [
      "Season the ground beef.",
      "Shape the beef into patties.",
      "Cook patties on a hot pan.",
      "Toast the burger buns.",
      "Assemble the burger and serve."
    ]
  },
  {
    id: "3",
    title: "Pancakes",
    description: "Soft and fluffy pancakes perfect for breakfast.",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    cookingTime: "20 minutes",
    difficulty: "Easy",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "2 tablespoons sugar",
      "Baking powder",
      "Butter"
    ],
    instructions: [
      "Mix flour, sugar and baking powder.",
      "Add milk and egg.",
      "Mix until smooth.",
      "Cook on a hot pan.",
      "Serve with honey or fruit."
    ]
  },
  {
    id: "4",
    title: "Fresh Fruit Salad",
    description: "A refreshing combination of fresh seasonal fruits.",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea",
    cookingTime: "10 minutes",
    difficulty: "Easy",
    ingredients: [
      "Strawberries",
      "Apples",
      "Bananas",
      "Grapes",
      "Orange"
    ],
    instructions: [
      "Wash all the fruits.",
      "Cut fruits into small pieces.",
      "Mix everything in a bowl.",
      "Chill and serve."
    ]
  },
  {
    id: "5",
    title: "Grilled Chicken",
    description: "Tender grilled chicken with delicious herbs and spices.",
    category: "dinner",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
    cookingTime: "50 minutes",
    difficulty: "Medium",
    ingredients: [
      "Chicken",
      "Garlic",
      "Lemon",
      "Olive oil",
      "Black pepper",
      "Salt"
    ],
    instructions: [
      "Prepare the chicken.",
      "Mix garlic, lemon and spices.",
      "Marinate the chicken.",
      "Grill until fully cooked.",
      "Serve with vegetables."
    ]
  },
  {
    id: "6",
    title: "Chocolate Cake",
    description: "Rich and delicious homemade chocolate cake.",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    cookingTime: "60 minutes",
    difficulty: "Hard",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Milk",
      "Butter"
    ],
    instructions: [
      "Mix all dry ingredients.",
      "Add eggs, milk and butter.",
      "Mix until smooth.",
      "Pour into a baking pan.",
      "Bake until fully cooked."
    ]
  }
];

export const categories = [
  { id: "breakfast", name: "Breakfast", icon: "🍳" },
  { id: "lunch", name: "Lunch", icon: "🍱" },
  { id: "dinner", name: "Dinner", icon: "🍽️" },
  { id: "dessert", name: "Dessert", icon: "🍰" }
];

export default { Recipes, categories };