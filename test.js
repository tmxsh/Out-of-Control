

enum Rank
{
	Rift = 1,
	Exotic Matter,
	Deflector,
	Anomaly,
	Rewind,
	Dark Energy,
	Singularity,
	Antimatter,
	Time Stop,
	Nova
	
}


class Card
{
	constructor(rank, name, type, ability)
	{
		this.rank=rank;
		this.name;
		this.type=type;
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