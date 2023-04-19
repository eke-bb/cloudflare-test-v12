export type Language = {
  code: "eng" | "kor";
  label: string;
  isDefault: boolean;
};

export type Dataset = {
  name:
    | "development"
    | "us-staging"
    | "us-production"
    | "kr-staging"
    | "kr-production";
  isDefault: boolean;
};

export type RegionConfig = {
  languages: Language[];
  datasets: Dataset[];
};

export type LocalizationConfig = {
  [regionCode: string]: RegionConfig;
};

export type Localization = {
  languages: (region: string) => Language[];
  defaultLanguage(region: string): Language;
  datasets(region: string): Dataset[];
  regions: LocalizationConfig;
};
export default {
  languages(region: string): Language[] {
    return this.regions[region].languages;
  },

  defaultLanguage(region: string): Language {
    return this.languages(region).find((lang) => lang.isDefault)!;
  },

  datasets(region: string): Dataset[] {
    return this.regions[region].datasets;
  },

  // this should serve as our global region configuration
  regions: {
    us: {
      datasets: [
        { name: "development", isDefault: false },
        { name: "us-staging", isDefault: true },
        { name: "us-production", isDefault: false },
      ],
      languages: [
        {
          code: "eng",
          label: "English",
          isDefault: true,
        },
        {
          code: "esp",
          label: "Spanish",
          isDefault: true,
        },
      ],
    },
    kr: {
      datasets: [
        { name: "kr-staging", isDefault: true },
        { name: "kr-production", isDefault: false },
      ],
      languages: [
        {
          code: "kor",
          label: "한국어 / Korean",
          isDefault: true,
        },
        {
          code: "eng",
          label: "영어 / English",
          isDefault: false,
        },
      ],
    },
  },
} as Localization;
