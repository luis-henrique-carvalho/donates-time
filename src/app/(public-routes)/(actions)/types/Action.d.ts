export interface IActionAttributes {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  max_volunteers: number;
  category: string;
  ong_id: string;
  created_at: string;
  updated_at: string;
}

export interface IAction {
  id: string;
  type: string;
  attributes: IActionAttributes;
}

export interface IActionResponse {
  data: IAction[];
}
