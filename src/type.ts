export type ActionType = {
  cost: string[];
  name: string;
  effect: string[];
};

export type SkillType = {
  name: string;
  description: string;
};

export type DiceType ={
  value: string;
  color: string;
}

export type FormsType = {
  [key: string]: {
    alt: string[];
    dices: DiceType[];
    passive: string[];
    actions: ActionType[];
    skill: SkillType;
  };
};
