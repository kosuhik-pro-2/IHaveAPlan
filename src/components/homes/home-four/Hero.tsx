
const Hero = () => {
   return (
      <>
         <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="container">
               {/* Top Section: Heading + Avatar Group */}
               <div style={{ marginBottom: '60px' }}>
                  <div className="row align-items-flex-start">
                     <div className="col-lg-8">
                        <h1 style={{ 
                           color: '#fff', 
                           fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
                           fontWeight: '800', 
                           lineHeight: '1.15',
                           marginBottom: '0',
                           letterSpacing: '-1px'
                        }}>
                           Unleash Your Creativity<br />
                           And Bring IT to Reality
                        </h1>
                     </div>
                     <div className="col-lg-4 ms-auto text-lg-end">
                        {/* Avatar Group */}
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '0', justifyContent: 'flex-end' }}>
                           <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                              <img src="https://i.pravatar.cc/60?img=1" alt="avatar1" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #000', objectFit: 'cover', marginRight: '-30px', zIndex: '3' }} />
                              <img src="https://i.pravatar.cc/60?img=2" alt="avatar2" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #000', objectFit: 'cover', marginRight: '-30px', zIndex: '2' }} />
                              <img src="https://i.pravatar.cc/60?img=3" alt="avatar3" style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #000', objectFit: 'cover', marginRight: '-30px', zIndex: '1' }} />
                           </div>
                           <div style={{ backgroundColor: '#4F46E5', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '13px', flexShrink: 0, zIndex: '4' }}>
                              24K+
                           </div>
                        </div>
                        {/* Text */}
                        <div>
                           <p style={{ color: '#999', fontSize: '12px', fontWeight: '600', marginBottom: '5px', letterSpacing: '1px', textTransform: 'uppercase' }}>TRUSTED BY</p>
                           <p style={{ color: '#fff', fontSize: '15px', fontWeight: '600', marginBottom: '0' }}>24K+ CLIENTS</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Main Content Box */}
               <div style={{
                  border: '4px solid #FF6B47',
                  borderRadius: '35px',
                  position: 'relative',
                  minHeight: '500px',
                  background: 'linear-gradient(135deg, #FF9966 0%, #FF8844 50%, #FF7722 100%)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
               }}>
                  {/* Background 3D Cubes Image */}
                  <img
                     src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&q=80"
                     alt="Hero 3D Cubes"
                     style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: '0',
                        left: '0'
                     }}
                  />

                  {/* Blue Button with Arrow */}
                  <button
                     style={{
                        position: 'absolute',
                        bottom: '25px',
                        right: '25px',
                        width: '75px',
                        height: '75px',
                        borderRadius: '22px',
                        backgroundColor: '#4F46E5',
                        border: '3px solid #fff',
                        color: '#fff',
                        fontSize: '32px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        zIndex: '10',
                        fontWeight: 'bold',
                        boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)'
                     }}
                     onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = '#413FE0';
                     }}
                     onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = '#4F46E5';
                     }}
                  >
                     ↓
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Hero
