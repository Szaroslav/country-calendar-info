import { CalendarificMetadata } from "./CalendarificMetadata";

export interface CalendarificCountriesDto {
  meta: CalendarificMetadata;
  response: {
    url:       string;
    countries: Country[];
  }
}

interface Country {
  country_name:        string;
  "iso-3166":          string;
  total_holidays:      number;
  supported_languages: number;
  uuid:                string;
  flag_unicode:        string;
}
