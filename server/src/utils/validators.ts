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

  if (
    !username ||
    username.trim() === "" ||
    username.length > 20 ||
    username.length < 3
  ) {
    errors.username =
      "The username is not following the rules of setting an username";
  }

  if (!password || password.length < 6) {
    errors.password = "The passsword is not right";
  }

  return {
    errors,
  };
};

export const loginValidator = (username: string, password: string) => {
  const errors: AuthErrors = {};

  if (!username || username.trim() === "") {
    errors.username = "The username is not right";
  }
  if (!password) {
    errors.password = "The password is not right";
  }

  return {
    errors,
  };
};

export const projectNameError = (name: string) => {
  const errors: ProjectErorrs = {};

  if (!name || name.trim() === "" || name.length > 60) {
    errors.name = "The name length should be under 60 charecters";
  }
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
  const priorities = ["high", "middle", "low"];

  if (!title || title.trim() === "" || title.length > 60 || title.length < 3) {
    errors.title = "The title should be in the limit of 3-60";
  }

  if (!description || description.trim() === "") {
    errors.description = "The description is not there";
  }

  if (!priority || !priorities.includes(priority)) {
    errors.priority = "No priority given";
  }

  return {
    errors,
  };
};
