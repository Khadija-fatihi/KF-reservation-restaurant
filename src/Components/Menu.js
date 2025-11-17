import React, { useState } from 'react';

const Menu = ({ activeSection }) => {
  const [activeCategory, setActiveCategory] = useState('marocain');

  const menuItems = {
    marocain: [
      { 
        id: 1, 
        name: 'Couscous Royal', 
        price: '100dh', 
        description: 'Couscous traditionnel avec viandes variées et légumes frais',
        popular: true,
      image: '/Couscous.jpeg' 
        

      },
      { 
        id: 2, 
        name: 'Tajine d\'Agneau', 
        price: '70dh', 
        description: 'Tajine d\'agneau aux pruneaux et amandes',
        popular: true,
        image: '/tajine-agneau.jpg'
      },
      { 
        id: 3, 
        name: 'Pastilla au Poulet', 
        price: '200dh', 
        description: 'Feuilleté sucré-salé au poulet et amandes',
        image: '/Pastilla.jpeg'},
      { 
        id: 4, 
        name: 'Méchoui d\'Agneau', 
        price: '90dh', 
        description: 'Agneau rôti aux épices traditionnelles',
        image: '/Gigot-agneau.jpeg'
         }
    ],
    jus: [
      { 
        id: 5, 
        name: 'Jus d\'Avocat', 
        price: '25dh', 
        description: 'Jus crémeux d\'avocat frais à la vanille',
        popular: true,
        image: '/avoca.jpeg'
      },
      { 
        id: 6, 
        name: 'Jus d\'Orange Pressée', 
        price: '10dh', 
        description: 'Jus d\'orange fraîchement pressé',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      { 
        id: 7, 
        name: 'Smoothie Tropical', 
        price: '25dh', 
        description: 'Mélange exotique mangue, ananas, fruit de la passion',
        image: '/mangue.jpeg'
            },
      { 
        id: 8, 
        name: 'Jus de Betterave-Gingembre', 
        price: '20dh', 
        description: 'Boisson énergisante betterave et gingembre frais',
        image: '/dragon.jpeg'
      }
    ],
    plats: [
      { 
        id: 9, 
        name: 'Poulet Rôti aux Herbes', 
        price: '257dh', 
        description: 'Poulet rôti mariné aux herbes de Provence',
        image: '/Poulet.jpeg'      },
      { 
        id: 10, 
        name: 'Pâtes Carbonara', 
        price: '160dh', 
        description: 'Pâtes fraîches à la carbonara crémeuse',
        image: 'Spaghetti.jpeg'      },
      { 
        id: 11, 
        name: 'Salade César', 
        price: '30dh', 
        description: 'Salade fraîche avec poulet grillé et parmesan',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      { 
        id: 12, 
        name: 'Burger Gourmet', 
        price: '80dh', 
        description: 'Burger au bœuf charolais et cheddar affiné',
        popular: true,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ],
    desserts: [
      { 
        id: 13, 
        name: 'Pâtisseries Marocaines', 
        price: '60dh', 
        description: 'Assortiment de pâtisseries orientales',
        popular: true,
        image: 'halwa.jpeg'      },
      { 
        id: 14, 
        name: 'Tiramisu Maison', 
        price: '30dh', 
        description: 'Tiramisu traditionnel au mascarpone',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      { 
        id: 15, 
        name: 'Fondant au Chocolat', 
        price: '40dh', 
        description: 'Fondant au cœur coulant, glace vanille',
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      { 
        id: 16, 
        name: 'Crème Brûlée', 
        price: 'dh', 
        description: 'Crème vanille caramélisée à la perfection',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  };

  const categories = [
    { id: 'marocain', name: 'Marocain', icon: '🍽️' },
    { id: 'jus', name: 'Jus & Boissons', icon: '🥤' },
    { id: 'plats', name: 'Plats', icon: '🍴' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];

  const filteredItems = menuItems[activeCategory] || [];

  return (
    <section id="menu" className={activeSection === 'menu' ? 'section active' : 'section'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Notre Carte</h2>
          <p className="section-subtitle">Découvrez nos spécialités préparées avec passion</p>
        </div>
        
        <div className="compact-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`compact-category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="compact-menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`compact-menu-item ${item.popular ? 'popular' : ''}`}>
              {item.popular && <div className="popular-tag">Populaire</div>}
              
              {/* Image ajoutée ici */}
              <div className="menu-item-image">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                />
              </div>
              
              <div className="compact-item-header">
                <h3 className="compact-item-name">{item.name}</h3>
                <span className="compact-item-price">{item.price}</span>
              </div>
              <p className="compact-item-description">{item.description}</p>
              <button className="order-btn">Commander</button>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <p>🎉 Profitez de 10% de réduction sur votre première commande !</p>
          <button className="cta-button">Voir toutes les promotions</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;