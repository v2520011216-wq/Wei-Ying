export type Language = 'zh' | 'en';

export interface Course {
  id: string;
  nameZh: string;
  nameEn: string;
  category: 'gender' | 'urban-history' | 'human-rights' | 'method-embodiment';
  academicYear: string; // e.g. '109', '110', '111', '112'
  semesterZh: string;
  semesterEn: string;
  instructor?: string;
  noteZh?: string;
  noteEn?: string;
  tags: string[];
}

export interface YearGpa {
  year: string;
  termZh: string;
  termEn: string;
  gpa: string;
  descriptionZh?: string;
  descriptionEn?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'academic' | 'internship' | 'social';
  year: string;
  titleZh: string;
  titleEn: string;
  orgZh: string;
  orgEn: string;
  roleZh?: string;
  roleEn?: string;
  awardZh?: string;
  awardEn?: string;
  descriptionZh: string[];
  descriptionEn: string[];
  tags: string[];
  highlight?: boolean;
}

export interface HonorItem {
  id: string;
  year: string;
  titleZh: string;
  titleEn: string;
  issuerZh: string;
  issuerEn: string;
  noteZh?: string;
  noteEn?: string;
  iconType: 'trophy' | 'award' | 'run' | 'badge';
}
