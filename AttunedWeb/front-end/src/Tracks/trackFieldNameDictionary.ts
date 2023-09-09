import { TrackDto } from "../dtos/Dtos.ts";

export const trackFieldNameDictionary: Record<keyof TrackDto, string> = {
  Album: "Album",
  Artist: "Artist",
  BitRate: "Bit Rate",
  Bpm: "Beats Per Minute",
  Composer: "Composer",
  DateAdded: "Date Added",
  DateModified: "Date Modified",
  DiscCount: "Disc Count",
  DiscNumber: "Disc Number",
  Genre: "Genre",
  Id: "Id",
  Location: "Location",
  Loved: "Loved",
  Media: "Media",
  Name: "Name",
  PlayCount: "Plays",
  PlayDate: "Last Played",
  Rating: "Rating",
  SampleRate: "Sample Rate",
  Size: "Size",
  SkipCount: "Skips",
  TotalTime: "Time",
  TrackCount: "Track Count",
  TrackNumber: "Track Number",
  Year: "Year"

};
