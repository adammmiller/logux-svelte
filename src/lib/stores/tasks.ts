import { syncMapTemplate } from '@logux/client'

import type { Task } from '$lib/api'

export const tasksStore = syncMapTemplate<Task>('tasks')
