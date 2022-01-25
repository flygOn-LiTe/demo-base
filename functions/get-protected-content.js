const content = {
    free: {
      src:
        'https://images.unsplash.com/photo-1550159930-40066082a4fc?auto=format&fit=crop&w=600&h=600&q=80',
      alt: 'corgi in the park with a sunset in the background',
      credit: 'Enter Now',
      creditLink: './freemembers/',
      message: 'Thanks for becoming a Free Member, you may now enter the free members area.',
      allowedRoles: ['free', 'pro'],
    },
    pro: {
      src:
        '/images/membersarea.png',
      alt: 'portal',
      credit: 'Enter Now',
      creditLink: './members/',
      message: 'Thanks for becoming a Pro Member! You now have access to The McBerry Realm.',
      allowedRoles: ['pro'],
    },
  };
  
 
     exports.handler = async (event, context) => {
       const { type } = JSON.parse(event.body);
       const { user } = context.clientContext;
       const roles = user ? user.app_metadata.roles : false;
       const { allowedRoles } = content[type];
    
       if (!roles || !roles.some(role => allowedRoles.includes(role))) {
         return {
           statusCode: 402,
           body: JSON.stringify({
             src: 'https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto/v1592618179/stripe-subscription/subscription-required.jpg',
             alt: 'corgi in a crossed circle with the text “subscription required”',
             credit: 'Sign Up',
             creditLink: './signup/',
             message: `This content requires a ${type} members subscription.`,
           }),
         };
       }
    
        return {
          statusCode: 200,
          body: JSON.stringify(content[type]),
        };
      };