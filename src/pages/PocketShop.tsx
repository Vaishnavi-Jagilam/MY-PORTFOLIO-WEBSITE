import { useState } from 'react';
import { ShoppingCart, Search, Menu, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PocketShop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItems = [
    { id: 1, name: "Black Hoodie", quantity: 1, price: 1200, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop" },
    { id: 2, name: "Fashion Tee", quantity: 1, price: 999, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop" },
    { id: 3, name: "Summer Dress", quantity: 1, price: 1750, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border rounded-none">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="text-2xl font-orbitron font-bold gradient-text">
              pocket <span className="text-accent">shop</span>
            </a>

            {/* Navigation */}
            <nav className={`hidden md:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <a href="#" className="text-foreground hover:text-primary transition-colors">home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Women</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Men</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-foreground hover:text-primary"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="text-foreground hover:text-primary relative"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              </button>
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-foreground hover:text-primary"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Box */}
          {isSearchOpen && (
            <div className="mt-4 animate-slide-in-right">
              <input 
                type="search" 
                placeholder="search here" 
                className="w-full px-4 py-2 rounded-lg bg-muted border border-muted-foreground/20 focus:outline-none focus:border-primary"
              />
            </div>
          )}
        </div>

        {/* Shopping Cart */}
        {isCartOpen && (
          <div className="absolute right-6 top-full mt-2 w-80 glass-card p-6 rounded-lg animate-scale-in">
            <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <button className="text-destructive hover:text-destructive/80">
                    <X className="w-4 h-4" />
                  </button>
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{item.quantity}</span>
                      <span>×</span>
                      <span>₹{item.price}/-</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Background */}
      <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="glass-card p-8 rounded-2xl">
                <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6 gradient-text">
                  summer<br />collection
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unleash your inner fashionista! Our website offers a curated selection of stylish 
                  clothing for all occasions. From trendy new arrivals to timeless staples, find 
                  high-quality pieces that flatter and empower you.
                </p>
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="slide-in-right">
              <div className="glass-card p-8 rounded-2xl text-center">
                <h2 className="text-3xl font-orbitron font-bold mb-4 text-accent">Special Offer</h2>
                <p className="text-xl text-muted-foreground mb-2">black sleeves</p>
                <span className="text-2xl font-bold text-primary mb-6 block">₹1050/-</span>
                <Button className="btn-primary text-primary-foreground font-medium text-lg px-8 py-3">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Our Gallery
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img 
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop" 
                alt="Women's fashion" 
                className="w-full h-full object-cover rounded-lg glass-card p-2"
              />
            </div>
            <div className="md:col-span-2 grid grid-rows-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=300&fit=crop" 
                alt="Men's fashion" 
                className="w-full object-cover rounded-lg glass-card p-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=300&fit=crop" 
                alt="Accessories" 
                className="w-full object-cover rounded-lg glass-card p-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" 
                alt="Fashion banner" 
                className="w-full rounded-lg glass-card p-2"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-orbitron font-bold gradient-text">
                We Offer Brand New Style
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unleash your inner fashionista! Our website offers a curated selection of stylish 
                clothing for all occasions. From trendy new arrivals to timeless staples.
              </p>
              <Button className="btn-secondary text-secondary-foreground font-medium text-lg px-8 py-3">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Type */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Products Type
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" 
                alt="Boys fashion" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <Button className="btn-primary text-primary-foreground w-full">Shop Now</Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop" 
                alt="Girls fashion" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <Button className="btn-primary text-primary-foreground w-full">Shop Now</Button>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=500&fit=crop" 
                alt="Kids fashion" 
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <Button className="btn-primary text-primary-foreground w-full">Shop Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Featured Products
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group glass-card p-4 rounded-lg hover:scale-105 transition-transform">
                <img 
                  src={`https://images.unsplash.com/photo-${1515372039744 + item}?w=300&h=300&fit=crop`}
                  alt={`Featured product ${item}`}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <Button className="btn-outline w-full group-hover:btn-primary transition-all">
                  Shop Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 gradient-text">
            Our Blogs and News
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-lg group hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=250&fit=crop" 
                alt="Fashion blog" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                This is secret about fashion people
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg group hover:scale-105 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop" 
                alt="Fashion trends" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-medium group-hover:text-primary transition-colors">
                This is secret about fashion people
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PocketShop;