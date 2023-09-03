//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

export interface TrackDto
{
	Id: number;
	Location: string;
	Media: "Music";
	Size: number | undefined;
	DateModified: UTCDateTime;
	DateAdded: UTCDateTime;
	BitRate: number | undefined;
	SampleRate: number | undefined;
	TotalTime: any | undefined;
	Year: number | undefined;
	Bpm: number | undefined;
	DiscNumber: number | undefined;
	DiscCount: number | undefined;
	TrackNumber: number | undefined;
	TrackCount: number | undefined;
	Name: string;
	Artist: string;
	Composer: string;
	Album: string;
	Genre: string;
	PlayCount: number | undefined;
	PlayDate: UTCDateTime | undefined;
	SkipCount: number | undefined;
	Rating: number;
	Loved: boolean;
}
