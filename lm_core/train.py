from rasa_core.agent import Agent

agent = Agent()
data = agent.load_data("stories.md")
agent.train(data)