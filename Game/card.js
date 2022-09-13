class Card
{
	constructor(rank, name, type, ability)
	{
		this.rank=rank;
		this.name;
		this.type=type;
		this.ability=ability;
	}
	
	get rank()
	{
		return this.rank;
	}
	
	get name()
	{
		return this.name;
	}
	
	get type()
	{
		return this.type;
	}
	
	get ability()
	{
		return this.ability;
	}
}

class Rift extends Card
{
	constructor()
	{
		//rCard(1, "Rift", 0, "to be implemented");
		this.rank=1;
		this.name="Rift";
		this.type=0;
		this.ability="to be implemented";
	}
}

class ExoticMatter extends Card
{
	constructor()
	{
		this.rank=2;
		this.name="Exotic Matter";
		this.type=0;
		this.ability="to be implemented";
	}
}

class Deflector extends Card
{
	constructor()
	{

	}
}
