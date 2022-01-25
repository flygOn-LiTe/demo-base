const content = {
    free: {
      src:
        '/images/freemembers.png',
      alt: 'free members portal',
      credit: 'Enter Now',
      creditLink: './freemembers/',
      message: 'You now have access to the free members area',
      allowedRoles: ['free', 'pro'],
    },
    pro: {
      src:
        '/images/membersarea.png',
      alt: 'McBerry portal',
      credit: 'Enter Now',
      creditLink: './members/',
      message: 'You now have access to The McBerry Realm.',
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
             src: '/images/nomember.png',
             alt: 'Gated Content',
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