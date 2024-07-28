 // Makes slug for project names ex- Uli will become uli, Viral Spiral will become viral-spiral
 function projectSlugMaker(project){
    if(typeof project !=="string") return
    let slug = project.toLowerCase();
    const arr = slug.split(" ");
    return arr.join("-");
}

module.exports= {projectSlugMaker};