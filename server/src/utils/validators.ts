interface AuthErrors {
  username?: string;
  password?: string;
}

interface ProjectErorrs {
  name?: string;
  members?: string;
}

interface BugErrors {
  title?: string;
  description?: string;
  priority?: string;
}

export const registerValidator = (username: string, password: string) => {
  const errors: AuthErrors = {};
};

export const loginValidator = (username: string, password: string) => {
  const errors: AuthErrors = {};
};

export const projectNameError = (name: string) => {
  const errors: ProjectErorrs = {};
};

export const projectMemberError = (members: string) => {
  const errors: ProjectErorrs = {};
};

export const createProjectValidator = (name: string, members: string) => {
  const errors: ProjectErorrs = {};
};

export const createBugValidator = (
  title: string,
  description: string,
  priority: string
) => {
  const errors: BugErrors = {};
};
