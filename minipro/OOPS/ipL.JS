class Iplteam {
    static #totalTeam=0
    static #champion=null 
    #hello

    constructor (teamName,city,captian){
      this.teamName=teamName
      this.city=city 
      this.captian=captian 
      Iplteam.#totalTeam+1  
      this.win=0
      this.loss=0
    }

    getInfo (){
        console.log(`teamName,${teamName} `)
        console.log(`City ${city}`)
        console.log(`captain ${this.captian}`)
    }
    static getTotalTeam(){
        console.log('Total Team in IPL', Iplteam.#totalTeam)
    }
     recordResult(result){
          if(result==win){
            this.win++
          }
          else if(result==loss){
            this.loss++
          }
     }




}