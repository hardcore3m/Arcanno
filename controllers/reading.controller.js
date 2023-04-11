exports.read = (req,res)=>{
    try {
        
        res.status(501).render('501', { title: 'Em construção' });
      } catch (error) {
        res.status(400).send(error.message)
      }
}